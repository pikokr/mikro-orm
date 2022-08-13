import { Reference } from './Reference';
import type { EntityData, EntityDTO, IWrappedEntity, Loaded } from '../typings';
import type { AssignOptions } from './EntityAssigner';
import { EntityAssigner } from './EntityAssigner';
import { helper } from './wrap';

export abstract class BaseEntity<T, PK extends keyof T, P extends string = never> implements IWrappedEntity<T, PK, P> {

  isInitialized(): boolean {
    return helper(this as unknown as T).__initialized;
  }

  isTouched(): boolean {
    return helper(this as unknown as T).__touched;
  }

  populated(populated = true): void {
    helper(this as unknown as T).populated(populated);
  }

  toReference() {
    return Reference.create(this) as any; // maintain the type from IWrappedEntity
  }

  toObject(ignoreFields: string[] = []): EntityDTO<T> {
    return helper(this as unknown as T).toObject(ignoreFields);
  }

  toJSON(...args: any[]): EntityDTO<T> {
    return this.toObject(...args);
  }

  toPOJO(): EntityDTO<T> {
    return helper(this as unknown as T).toPOJO();
  }

  assign(data: EntityData<T>, options?: AssignOptions): T {
    return EntityAssigner.assign(this as unknown as T, data, options);
  }

  init<P extends string = never>(populated = true): Promise<Loaded<T, P>> {
    return helper(this as unknown as T).init<P>(populated);
  }

  getSchema(): string | undefined {
    return helper(this as unknown as T).getSchema();
  }

  setSchema(schema?: string): void {
    helper(this as unknown as T).setSchema(schema);
  }

}

Object.defineProperty(BaseEntity.prototype, '__baseEntity', { value: true, writable: false, enumerable: false });
