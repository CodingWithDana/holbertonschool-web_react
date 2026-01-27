interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsofExperience?: number;
    location: string;
    // allow any additional property
    [key: string]: any;
}