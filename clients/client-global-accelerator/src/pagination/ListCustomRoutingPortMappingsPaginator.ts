import { Paginator } from "@aws-sdk/types";

import {
  ListCustomRoutingPortMappingsCommand,
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
} from "../commands/ListCustomRoutingPortMappingsCommand";
import { GlobalAccelerator } from "../GlobalAccelerator";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlobalAcceleratorClient,
  input: ListCustomRoutingPortMappingsCommandInput,
  ...args: any
): Promise<ListCustomRoutingPortMappingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomRoutingPortMappingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GlobalAccelerator,
  input: ListCustomRoutingPortMappingsCommandInput,
  ...args: any
): Promise<ListCustomRoutingPortMappingsCommandOutput> => {
  // @ts-ignore
  return await client.listCustomRoutingPortMappings(input, ...args);
};
export async function* paginateListCustomRoutingPortMappings(
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingPortMappingsCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomRoutingPortMappingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomRoutingPortMappingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlobalAccelerator) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlobalAcceleratorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GlobalAccelerator | GlobalAcceleratorClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
