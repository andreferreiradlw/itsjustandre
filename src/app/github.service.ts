import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users/andreferreiradlw/repos';
  private githubRepos = new Subject<any>();

  constructor(private http: HttpClient) { }

  getRepos() {
    this.http.get(this.apiUrl)
      .subscribe(reposData => {
        // convert object into array
        const reposArray = Object.keys(reposData).map(i => reposData[i]);
        // for each repository loop
        reposArray.forEach(repository => {
          // create new empty key in array for languages
          repository['repoLanguages'] = [];
          // get languages
          const languageUrl = 'https://api.github.com/repos/andreferreiradlw/' + repository.name + '/languages';
          this.http.get(languageUrl)
            .subscribe(repoLanguages => {
              // get languages names
              for ( const language in repoLanguages ) {
                if (language) {
                  // for every language push into repo object key
                  repository.repoLanguages.push(language);
                }
              }
            });
        });
        this.githubRepos.next(reposArray);
      });
  }
  getReposUpdateListener() {
    return this.githubRepos.asObservable();
    // listen to the subject
  }
}
