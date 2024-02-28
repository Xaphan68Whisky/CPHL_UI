import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {

    const headers2={
        'Content-Type': 'application/json',
        // 'product':'llu.android',
        // 'version':'4.7',
    }
    const headers = new Headers({
        'Content-Type': 'application/json',
        // 'product':'llu.android',
        // 'version':'4.7',
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

//   export function login(loginRequest) {
   
//     return request({
//         url: "https://api.libreview.io/llu/auth/login",
//         method: 'POST',
//         body: JSON.stringify(loginRequest)
//     });


// }

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

export function Systemload(){
    return request({
        url: API_BASE_URL + "/fil/sysl",
        method: 'GET'
    });
}

///Time
export function CatLoad(){
    return request({
        url: API_BASE_URL + "/fil/catGender",
        method: 'GET'
    });
}

//Get Test details Summary(Test by status)
export function Tsummary(){
    return request({
        url: API_BASE_URL + "/fil/tsummary",
        method: 'GET'
    });
}

//Get Test details Summary(Test by Specimen)
export function SpecSummary(){
    return request({
        url: API_BASE_URL + "/fil/specSummary",
        method: 'GET'
    });
}
//Specimen Summary
export function MySpecimens(){
    return request({
        url: API_BASE_URL + "/fil/mySummary",
        method: 'GET'
    });
}

export function MyPatientSummary(){
    return request({
        url: API_BASE_URL + "/fil/ptSummary",
        method: 'GET'
    });
}

export function NumberOfTestDone(){
    return request({
        url: API_BASE_URL + "/fil/NumbersDone",
        method: 'GET'
    });
}



export function Malariaresults(){
    return request({
        url: API_BASE_URL + "/fil/malariaT",
        method: 'GET'
    });
}

export function TBresults(){
    return request({
        url: API_BASE_URL + "/fil/tb",
        method: 'GET'
    });
}

export function HIVresults(){
    return request({
        url: API_BASE_URL + "/fil/hiv",
        method: 'GET'
    });
}
// export function getAllusers(){
//     return request({
//         url:API_BASE_URL +"/users",
//         method:'GET'
//     });
// }

