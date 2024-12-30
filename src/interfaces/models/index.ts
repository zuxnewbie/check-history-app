interface IBaseModel {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    version: number;
}

interface ITrackingModel<T = any> {
    createdBy: T | string;
    updatedBy?: T | string;
}

interface ISoftDeleteModel<T = any> {
    deletedBy: T | string;
    deletedAt: Date;
    isDeleted: boolean;
}

