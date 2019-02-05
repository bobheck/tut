<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Signup Form</h1>
                    <hr>
                    <div class="form-group">
                        <label for="fullName">Full Name</label>
                        <input
                                type="text"
                                id="fullName"
                                class="form-control"
                                v-model="userData.fullName">
                    </div>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                                type="text"
                                id="email"
                                class="form-control"
                                v-model="userData.email">
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input
                                type="password"
                                id="pwd"
                                class="form-control"
                                v-model="userData.pwd">
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="storeDataYes">
                                <input
                                        type="radio"
                                        id="storeDataYes"
                                        value="true"
                                        v-model="userData.storeData"> Yes
                            </label>
                            <label for="storeDataNo">
                                <input
                                        type="radio"
                                        id="storeDataNo"
                                        value="false"
                                        v-model="userData.storeData"> No
                            </label>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <button
                                        class="btn btn-primary">Submit!
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName }} </p>
                        <p>Mail: {{ userData.email }} </p>
                        <p>Password: {{ userData.pwd }} </p>
                        <p>Store in Database?: {{ userData.storeData }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    fullName: '',
                    email: '',
                    pwd: '',
                    storeData: []
                }
            }
        }
    }
</script>

<style>
</style>
