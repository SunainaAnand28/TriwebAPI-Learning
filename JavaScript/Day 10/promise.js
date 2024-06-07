function validate(name) {
    return new Promise((resolve, reject) => {
        if (name == "abcd") {
            resolve("yes validated");

        } else {
            reject("not validated");
        }
});
}


console.log(validate("abcd"))