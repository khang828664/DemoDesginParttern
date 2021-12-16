/**
 *Subclass 1
 */
export class VideoFile {
    constructor() {
    }

    LoadVideoFile(path: string): string {
        return `load file path: ${path} `;
    }
}

/**
 * SubClass 2 
 */
export class OggCompressionCodec {
    constructor() {
    }
    FileOgg() {
        return 'read file Ogg';
    }
/**
* SubClass 3
*/
}
export class MPEG4CompressionCodec {
    constructor() {
    }
    FileMp4() {
        return 'read file Mp4';
    }
}
export class MkvCompressionCodec {
    constructor() {
    }
    FileMkv() {
        return 'read file Mkv';
    }
}
export class AudioMixer {
    mixed = (audio:string) => `${audio}`;
}
export class VideoConverter {

    videoFile: VideoFile;
    convertMP4: MPEG4CompressionCodec;
    convertOgg: OggCompressionCodec;
    mixAudio: AudioMixer;
    constructor(videoFile, convertMp4, convertOgg, mixAudio) {
        this.videoFile = videoFile;
        this.convertMP4 = convertMp4;
        this.mixAudio = mixAudio;
        this.convertOgg = convertOgg;6
        this.mixAudio = this.mixAudio;
    }
    convert(fileName: string, format: string, audio:string) {
        let result: string = "";
        let file = this.videoFile.LoadVideoFile(fileName);
        if (format === "MP4") {
            result = `${file}\n${this.convertMP4.FileMp4()}`
        }else {
            if(format === "OGG") {
            result = `${fileName}\n${this.convertOgg.FileOgg()}`
            }
        }
        result = result + "\nMixSound:"+ this.mixAudio.mixed(audio);
        this.debugResult(result);
    }
    debugResult(param: string) {
        console.log(param);
    }
}

