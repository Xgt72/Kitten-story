import{ Kitten } from "../create-kitten/kitten";

export const picturesPath: string = "../../assets/images/";

export let CATLIST: Kitten[] = [
    {name: "Garine", race: "Bleu Russe", birthDate:"2010-07-06", pictureLink: picturesPath + "cat01.jpeg"},
    {name: "Minette", race: "Persan", birthDate:"2015-02-16", pictureLink: picturesPath + "cat02.jpeg"},
    {name: "Sunset", race: "Siamois", birthDate:"2018-10-27", pictureLink: picturesPath + "cat03.jpeg"}
];