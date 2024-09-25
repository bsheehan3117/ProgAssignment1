import { TagParamType } from "../types/types";

/**
 * This class represents the tag model.
 * It contains the tag details.
 */
export default class Tag {
    tid: string;
    name: string;

    /**
     * Creates an instance of Tag.
     * @param {TagParamType} param - The data to be used for creating the instance.
     */
    constructor({ tid, name }: TagParamType) {
        this.tid = tid;
        this.name = name;
    }
}
