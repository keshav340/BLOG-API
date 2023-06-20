import { MetaService } from './meta.service';
import { Meta, CreateMetaResponse, UpdateMetaResponse, DeleteMetaResponse } from 'src/module/meta/schema/schema';
import { CreateMetaArgs, UpdateMetaArgs, DeleteMetaArgs } from 'src/module/meta/args/args';
export declare class MetaResolver {
    private readonly metaService;
    constructor(metaService: MetaService);
    getAllMeta(): Promise<Meta[]>;
    getMetaById(id: number): Promise<Meta>;
    createMeta({ metaTitle, metaDescription }: CreateMetaArgs): Promise<CreateMetaResponse>;
    updateMeta({ id, metaTitle, metaDescription }: UpdateMetaArgs): Promise<UpdateMetaResponse>;
    deleteMeta(deleteMetaArgs: DeleteMetaArgs): Promise<DeleteMetaResponse>;
}
