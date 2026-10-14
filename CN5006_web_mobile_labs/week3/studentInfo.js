const dateOfBirth = "27/09/2005"

const getStudentName = () =>
{
    return "Tom Bland"
}

const getCampusName = () =>
{
    return ("UEL Campus")
}

//exporting the functions and variables 
exports.getName = getStudentName
exports.location = getCampusName
exports.dob = dateOfBirth

//exporting functions with parameters 
exports.StundentGrade = (marks) =>
{
    if (marks > 50 && marks < 70) return ("B grade")
    else
        return ("A grade")
}