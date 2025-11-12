interface HdfcVersion1Contract {
    Personal: string;
    NRI: string;
}

interface HdfcVersion2Contract extends HdfcVersion1Contract {
    Loans: string;
}

let lowCompatibleUser: HdfcVersion1Contract = {
    NRI: "NRI Banking",
    Personal: "Personal Banking"
}

let highCompatibleUser: HdfcVersion2Contract = {
    Loans: "Personal and Housing Loans",
    NRI: "NRI Banking",
    Personal: "Personal Banking"

}