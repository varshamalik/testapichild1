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
<<<<<<< HEAD

    getNewFullName1():string{
=======
    
    getNewFullName2():string{
>>>>>>> d5a0cd09cd5e04a8d5d59da99d7370f3ee60d58f
        return this.fName.concat(this.lName).concat(" Hi there!!");
    }
}

export {Students}
