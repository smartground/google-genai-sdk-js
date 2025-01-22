/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Code generated by the Google Gen AI SDK generator DO NOT EDIT.

import {ApiClient} from './_api_client';
import * as common from './_common';
import {BaseModule} from './_common';
import * as types from './types';
import * as t from './_transformers';

function listFilesConfigToMldev(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  let fromHttpOptions = common.getValueByPath(fromObject, ['httpOptions']);
  if (fromHttpOptions !== undefined) {
    common.setValueByPath(toObject, ['httpOptions'], fromHttpOptions);
  }

  let fromPageSize = common.getValueByPath(fromObject, ['pageSize']);
  if (fromPageSize !== undefined) {
    common.setValueByPath(parentObject, ['_query', 'pageSize'], fromPageSize);
  }

  let fromPageToken = common.getValueByPath(fromObject, ['pageToken']);
  if (fromPageToken !== undefined) {
    common.setValueByPath(parentObject, ['_query', 'pageToken'], fromPageToken);
  }

  return toObject;
}

function listFilesConfigToVertex(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  let fromHttpOptions = common.getValueByPath(fromObject, ['httpOptions']);
  if (fromHttpOptions !== undefined) {
    common.setValueByPath(toObject, ['httpOptions'], fromHttpOptions);
  }

  let fromPageSize = common.getValueByPath(fromObject, ['pageSize']);
  if (fromPageSize !== undefined) {
    common.setValueByPath(parentObject, ['_query', 'pageSize'], fromPageSize);
  }

  let fromPageToken = common.getValueByPath(fromObject, ['pageToken']);
  if (fromPageToken !== undefined) {
    common.setValueByPath(parentObject, ['_query', 'pageToken'], fromPageToken);
  }

  return toObject;
}

function listFilesParametersToMldev(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  let fromConfig = common.getValueByPath(fromObject, ['config']);
  if (fromConfig !== undefined) {
    common.setValueByPath(
      toObject,
      ['config'],
      listFilesConfigToMldev(apiClient, fromConfig, toObject),
    );
  }

  return toObject;
}

function listFilesParametersToVertex(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  if (common.getValueByPath(fromObject, ['config']) !== undefined) {
    throw new Error('config parameter is not supported in Vertex AI.');
  }

  return toObject;
}

function getFileConfigToMldev(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  let fromHttpOptions = common.getValueByPath(fromObject, ['httpOptions']);
  if (fromHttpOptions !== undefined) {
    common.setValueByPath(toObject, ['httpOptions'], fromHttpOptions);
  }

  return toObject;
}

function getFileConfigToVertex(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  let fromHttpOptions = common.getValueByPath(fromObject, ['httpOptions']);
  if (fromHttpOptions !== undefined) {
    common.setValueByPath(toObject, ['httpOptions'], fromHttpOptions);
  }

  return toObject;
}

function getFileParametersToMldev(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  let fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName !== undefined) {
    common.setValueByPath(
      toObject,
      ['_url', 'file'],
      t.tFileName(apiClient, fromName),
    );
  }

  let fromConfig = common.getValueByPath(fromObject, ['config']);
  if (fromConfig !== undefined) {
    common.setValueByPath(
      toObject,
      ['config'],
      getFileConfigToMldev(apiClient, fromConfig, toObject),
    );
  }

  return toObject;
}

function getFileParametersToVertex(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  if (common.getValueByPath(fromObject, ['name']) !== undefined) {
    throw new Error('name parameter is not supported in Vertex AI.');
  }

  if (common.getValueByPath(fromObject, ['config']) !== undefined) {
    throw new Error('config parameter is not supported in Vertex AI.');
  }

  return toObject;
}

function fileStatusFromMldev(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  let fromDetails = common.getValueByPath(fromObject, ['details']);
  if (fromDetails !== undefined) {
    common.setValueByPath(toObject, ['details'], fromDetails);
  }

  let fromMessage = common.getValueByPath(fromObject, ['message']);
  if (fromMessage !== undefined) {
    common.setValueByPath(toObject, ['message'], fromMessage);
  }

  let fromCode = common.getValueByPath(fromObject, ['code']);
  if (fromCode !== undefined) {
    common.setValueByPath(toObject, ['code'], fromCode);
  }

  return toObject;
}

function fileStatusFromVertex(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  return toObject;
}

function fileFromMldev(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  let fromName = common.getValueByPath(fromObject, ['name']);
  if (fromName !== undefined) {
    common.setValueByPath(toObject, ['name'], fromName);
  }

  let fromDisplayName = common.getValueByPath(fromObject, ['displayName']);
  if (fromDisplayName !== undefined) {
    common.setValueByPath(toObject, ['displayName'], fromDisplayName);
  }

  let fromMimeType = common.getValueByPath(fromObject, ['mimeType']);
  if (fromMimeType !== undefined) {
    common.setValueByPath(toObject, ['mimeType'], fromMimeType);
  }

  let fromSizeBytes = common.getValueByPath(fromObject, ['sizeBytes']);
  if (fromSizeBytes !== undefined) {
    common.setValueByPath(toObject, ['sizeBytes'], fromSizeBytes);
  }

  let fromCreateTime = common.getValueByPath(fromObject, ['createTime']);
  if (fromCreateTime !== undefined) {
    common.setValueByPath(toObject, ['createTime'], fromCreateTime);
  }

  let fromExpirationTime = common.getValueByPath(fromObject, [
    'expirationTime',
  ]);
  if (fromExpirationTime !== undefined) {
    common.setValueByPath(toObject, ['expirationTime'], fromExpirationTime);
  }

  let fromUpdateTime = common.getValueByPath(fromObject, ['updateTime']);
  if (fromUpdateTime !== undefined) {
    common.setValueByPath(toObject, ['updateTime'], fromUpdateTime);
  }

  let fromSha256Hash = common.getValueByPath(fromObject, ['sha256Hash']);
  if (fromSha256Hash !== undefined) {
    common.setValueByPath(toObject, ['sha256Hash'], fromSha256Hash);
  }

  let fromUri = common.getValueByPath(fromObject, ['uri']);
  if (fromUri !== undefined) {
    common.setValueByPath(toObject, ['uri'], fromUri);
  }

  let fromState = common.getValueByPath(fromObject, ['state']);
  if (fromState !== undefined) {
    common.setValueByPath(toObject, ['state'], fromState);
  }

  let fromVideoMetadata = common.getValueByPath(fromObject, ['videoMetadata']);
  if (fromVideoMetadata !== undefined) {
    common.setValueByPath(toObject, ['videoMetadata'], fromVideoMetadata);
  }

  let fromError = common.getValueByPath(fromObject, ['error']);
  if (fromError !== undefined) {
    common.setValueByPath(
      toObject,
      ['error'],
      fileStatusFromMldev(apiClient, fromError, toObject),
    );
  }

  return toObject;
}

function fileFromVertex(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  return toObject;
}

function listFilesResponseFromMldev(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  let fromNextPageToken = common.getValueByPath(fromObject, ['nextPageToken']);
  if (fromNextPageToken !== undefined) {
    common.setValueByPath(toObject, ['nextPageToken'], fromNextPageToken);
  }

  let fromFiles = common.getValueByPath(fromObject, ['files']);
  if (fromFiles !== undefined) {
    common.setValueByPath(
      toObject,
      ['files'],
      fromFiles!.map((item: any) => {
        return fileFromMldev(apiClient, item, toObject);
      }),
    );
  }

  return toObject;
}

function listFilesResponseFromVertex(
  apiClient: ApiClient,
  fromObject: any,
  parentObject?: any,
): Record<string, any> {
  let toObject: Record<string, any> = {};

  return toObject;
}

export class Files extends BaseModule {
  constructor(private readonly apiClient: ApiClient) {
    super();
  }

  private async _list(
    config?: types.ListFilesConfig,
  ): Promise<types.ListFilesResponse> {
    let response: Promise<types.ListFilesResponse>;
    let path: string = '';
    let body: Record<string, any> = {};
    let kwargs: Record<string, any> = {};
    kwargs['config'] = config;
    if (this.apiClient.isVertexAI()) {
      body = listFilesParametersToVertex(this.apiClient, kwargs);
      path = common.formatMap('None', body['_url']);
      delete body['config']; // TODO: Remove this hack for removing config.
      response = this.apiClient.get(path, body, types.ListFilesResponse);

      return response.then((apiResponse) => {
        const resp = listFilesResponseFromVertex(this.apiClient, apiResponse);
        Object.setPrototypeOf(resp, types.ListFilesResponse.prototype);
        return resp as types.ListFilesResponse;
      });
    } else {
      body = listFilesParametersToMldev(this.apiClient, kwargs);
      path = common.formatMap('files', body['_url']);
      delete body['config']; // TODO: Remove this hack for removing config.
      response = this.apiClient.get(path, body, types.ListFilesResponse);

      return response.then((apiResponse) => {
        const resp = listFilesResponseFromMldev(this.apiClient, apiResponse);
        Object.setPrototypeOf(resp, types.ListFilesResponse.prototype);
        return resp as types.ListFilesResponse;
      });
    }
  }

  async get(name: string, config?: types.GetFileConfig): Promise<types.File> {
    let response: Promise<types.File>;
    let path: string = '';
    let body: Record<string, any> = {};
    let kwargs: Record<string, any> = {};
    kwargs['name'] = name;
    kwargs['config'] = config;
    if (this.apiClient.isVertexAI()) {
      body = getFileParametersToVertex(this.apiClient, kwargs);
      path = common.formatMap('None', body['_url']);
      delete body['config']; // TODO: Remove this hack for removing config.
      response = this.apiClient.get(path, body, undefined);

      return response.then((apiResponse) => {
        const resp = fileFromVertex(this.apiClient, apiResponse);

        return resp as types.File;
      });
    } else {
      body = getFileParametersToMldev(this.apiClient, kwargs);
      path = common.formatMap('files/{file}', body['_url']);
      delete body['config']; // TODO: Remove this hack for removing config.
      response = this.apiClient.get(path, body, undefined);

      return response.then((apiResponse) => {
        const resp = fileFromMldev(this.apiClient, apiResponse);

        return resp as types.File;
      });
    }
  }

  list = (config?: types.ListFilesConfig): Promise<types.ListFilesResponse> => {
    return this._list(config);
  };
}
