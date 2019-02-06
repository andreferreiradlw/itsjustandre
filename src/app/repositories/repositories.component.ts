import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  private reposSub: Subscription;
  private languagesSub: Subscription;
  repositoryCollection: any;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getRepos();
    // will get initial array of posts from server
    this.reposSub = this.githubService.getReposUpdateListener()
      .subscribe( repoData => {
        this.repositoryCollection = repoData.sort((val1: any, val2: any) => {
          return new Date(val1.created_at) - new Date(val2.created_at);
        });
        // console.log(this.repositoryCollection);
      });
  }
}
