import PersonDTO from "./PersonDTO";

export default interface ProfilesProps{
    count: number,
    previous: string,
    next: string,
    results: PersonDTO[]
}