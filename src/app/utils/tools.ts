import { environment } from '../environments/environment';

export function buildImageUrl(path: string | undefined): string {
  if (!path) {
    return environment.apiUrl + '/images/placeHolder.jpg';
  }

  return environment.apiUrl + path;
}
