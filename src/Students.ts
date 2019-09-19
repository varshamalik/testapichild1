class Students{
    private fName: string;
    private lName: string;

    constructor(fname: string, lname: string){
        this.fName = fname;
        this.lName = lname;
    }

    getFullName():string{
        return this.fName.concat(this.lName).concat(" Hi there!!");
    }

    getNewFullName5():string{
        return this.fName.concat(this.lName).concat(" Hi there!!");
    }
}

export {Students}
