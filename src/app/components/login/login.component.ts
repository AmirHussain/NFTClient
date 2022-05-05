import { Apollo, Query } from 'apollo-angular';
import { user, allUsers } from './../../types';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users: Observable<allUsers>
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<Query<any>>({
      query: gql`
      query allUsers {
        allUsers{
         userId
         email
         age
         firstName
         lastName
       }
      }
      `
    }).valueChanges.subscribe(res=>{
      this.users=res.data['allUsers']
    })

    console.log(this.users);
  }

}
