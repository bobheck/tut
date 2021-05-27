// default function args

// old way of setting 'GET' as default method
function makeOldAjaxRequest(url, method) {
    if(!method) {
        method = 'GET';
    }
    return method;
    // logic to make request
}

// new way of setting 'GET' as default method
function makeNewAjaxRequest(url, method = 'GET') {
    return method;
    // logic to make request
}

let oldAjaxRequestNothingPassed = makeOldAjaxRequest('whatup.com');
console.log('oldAjaxRequestNothingPassed: ', oldAjaxRequestNothingPassed);
let oldAjaxRequestPostPassed = makeOldAjaxRequest('whatup.com','POST');
console.log('oldAjaxRequestPostPassed: ', oldAjaxRequestPostPassed);
let newAjaxRequestNothingPassed = makeNewAjaxRequest('whatup.com');
console.log('newAjaxRequestNothingPassed: ', newAjaxRequestNothingPassed);
let newAjaxRequestPostPassed = makeNewAjaxRequest('whatup.com','POST');
console.log('newAjaxRequestPostPassed: ', newAjaxRequestPostPassed);
let oldAjaxRequestNullPassed = makeOldAjaxRequest('whatup.com',null);
console.log('oldAjaxRequestNullPassed: ', oldAjaxRequestNullPassed);
let oldAjaxRequestUndefinedPassed = makeOldAjaxRequest('whatup.com',undefined);
console.log('oldAjaxRequestUndefinedPassed: ', oldAjaxRequestUndefinedPassed);
let newAjaxRequestNullPassed = makeNewAjaxRequest('whatup.com',null);
console.log('newAjaxRequestNullPassed: ', newAjaxRequestNullPassed);
let newAjaxRequestUndefinedPassed = makeNewAjaxRequest('whatup.com',undefined);
console.log('newAjaxRequestUndefinedPassed: ', newAjaxRequestUndefinedPassed);

//---------------------------------------------------------------------------------

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

function User(id) {
    this.id = id;
}

function createAdminUserNoDefault(user) {
    user.admin = true;
    return user;
}

function createAdminUserWithDefault(user = new User(uuidv4())) {
    user.admin = true;
    return user;
}

// without using default
let usernodefault = createAdminUserNoDefault(new User(uuidv4()));
console.log('usernodefault: ', usernodefault);

// using default
let userwithdefault = createAdminUserWithDefault();
console.log('userwithdefault: ', userwithdefault);

