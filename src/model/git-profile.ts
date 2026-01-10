/* eslint-disable @typescript-eslint/no-explicit-any */
export default class GitProfile {
    name: string;
    followers: number;
    location: string;
    url: string;
    image: string;


    constructor(name: string, followers: number, location: string, url: string, image: string) {
        this.name = name;
        this.followers = followers;
        this.location = location;
        this.url = url;
        this.image = image;
    }

     static fromData(data: any) : GitProfile {
        return new GitProfile(
            data.name,
            data.followers_url,
            data.location,
            data.url,
            data.avatar_url
        )
    }
}