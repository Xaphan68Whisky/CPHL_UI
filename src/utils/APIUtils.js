import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {

    const headers2={
        'Content-Type': 'application/json'
    }
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);
    
    return fetch(options.url, options).then(response =>
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
       
        
    );

};

export function login(loginRequest) {
   
      return request({
          url: API_BASE_URL + "/auth/signin",
          method: 'POST',
          body: JSON.stringify(loginRequest)
      });

  
  }

export function getCurrentUser() {
    console.log("I have been mounted")
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function Facilities(){
    return request({
        url: API_BASE_URL + "/fac/unhls",
        method: 'GET'
    });
}

export function TotalPatients(){
    return request({
        url: API_BASE_URL + "/fac/patN",
        method: 'GET'
    });
}

export function TotalSpecimen(){
    return request({
        url: API_BASE_URL + "/fac/specN",
        method: 'GET'
    });
}

export function TotalTest(){
    return request({
        url: API_BASE_URL + "/fac/TestT",
        method: 'GET'
    });
}

export function GenderTotal(){
    return request({
        url: API_BASE_URL + "/fac/Gend",
        method: 'GET'
    });
}



// export function getAllusers(){
//     return request({
//         url:API_BASE_URL +"/users",
//         method:'GET'
//     });
// }

