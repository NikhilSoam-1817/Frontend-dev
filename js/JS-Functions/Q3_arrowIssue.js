const user = {
    name: "Kishan",
    showName: () => {
        console.log(this.name);
    }
};
user.showName();

const fixedUser = {
    name: "Kishan",
    showName: function() {
        console.log(this.name);
    }
};
fixedUser.showName();