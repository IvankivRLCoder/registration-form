'use strict';

angular.module('myApp', [])
    .controller('AppController', ['$scope', function($scope) {
        var self = this;
        self.user={id:null,username:'',email:'',password:'',number:'',country:'',city:''};
        self.id = 4;

        self.users = [
            {id:1, username: 'Roman', email: 'hyphnotic1@gmail.com', password: '1234', number: '+380636061902',country:'Ukraine',city:'Lviv'},
            {id:2, username: 'Rorororo', email: 'IvankivRLCoder', password: '0000', number: '+380636061902',country:'Ukraine',city:'Lviv'},
        ];

        self.submit = function() {
            if(self.user.id === null){
                self.user.id = self.id++;
                console.log('Saving New User', self.user);
                self.users.push(self.user);
            }else{
                for(var i = 0; i < self.users.length; i++){
                    if(self.users[i].id === self.user.id) {
                        self.users[i] = self.user;
                        break;
                    }
                }
                console.log('User updated with id ', self.user.id);
            }
            self.reset();
        };

        self.edit = function(id){
            console.log('id to be edited', id);
            for(var i = 0; i < self.users.length; i++){
                if(self.users[i].id === id) {
                    self.user = angular.copy(self.users[i]);
                    break;
                }
            }
        }

        self.remove = function(id){
            console.log('id to be deleted', id);
            for(var i = 0; i < self.users.length; i++){
                if(self.users[i].id === id) {
                    self.users.splice(i,1);
                    if(self.user.id === id){
                        self.reset();
                    }
                    break;
                }
            }
        }

        self.reset = function(){
            self.user={id:null,username:'',email:'',password:'',number:'',country:'',city:''};
            $scope.myForm.$setPristine();
        }

    }]);
