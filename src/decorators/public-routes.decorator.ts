import { SetMetadata } from '@nestjs/common';

export const Public = () => {
  return SetMetadata('clavepubica2020', true);
};
