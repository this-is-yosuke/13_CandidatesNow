// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    // readonly Name: string | null;
    readonly Login: string | null;
    readonly ProfilePic: string | null;
    readonly Location: string | null;
    readonly Email: string | null;
    readonly Company: string | null;
    readonly Bio: string | null;
    // this is straight from the JSON
    readonly login: string | null;
    readonly id: number | null;
    readonly node_id: string | null;
    readonly avatar_url: string | null;
    readonly gravatar_id: string | null;
    readonly location: string | null;
    readonly email: string | null;
    readonly company: string | null;
    readonly bio: string | null;
}