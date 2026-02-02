interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fulltimeEmployee: boolean;
    yearsofExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

// Example usage
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'Melbourne',
    fulltimeEmployee: true,
    numberOfReports: 5,
};

console.log(director1);