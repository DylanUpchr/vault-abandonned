export class File {
  Id: number;
  User: number;
  FilePath: string;
  FileName: string;
  Ext: string;
  FileSize: number;
  PreviewPath: string;
  AnimPreviewPath: string;
  DateCreated: Date;
  DateModified: Date;
  DateAccessed: Date;

  constructor(id?: number,
              user?: number,
              filePath?: string,
              fileName?: string,
              ext?: string,
              fileSize?: number,
              previewPath?: string,
              animPreviewPath?: string,
              dateCreated?: Date,
              dateModified?: Date,
              dateAccessed?: Date) {
    this.Id = id;
    this.User = user;
    this.FilePath = filePath;
    this.FileName = fileName;
    this.Ext = ext;
    this.FileSize = fileSize;
    this.PreviewPath = previewPath;
    this.AnimPreviewPath = animPreviewPath;
    this.DateCreated = dateCreated;
    this.DateModified = dateModified;
    this.DateAccessed = dateAccessed;
  }

}
