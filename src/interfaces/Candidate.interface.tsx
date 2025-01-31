// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly Name: string | null;
    readonly ProfilePic: string | null;
    readonly Location: string | null;
    readonly Email: string | null;
    readonly Company: string | null;
    readonly Bio: string | null;
}