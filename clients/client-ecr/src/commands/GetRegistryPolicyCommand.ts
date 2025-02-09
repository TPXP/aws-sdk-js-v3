import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetRegistryPolicyRequest, GetRegistryPolicyResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetRegistryPolicyCommand,
  serializeAws_json1_1GetRegistryPolicyCommand,
} from "../protocols/Aws_json1_1";

export interface GetRegistryPolicyCommandInput extends GetRegistryPolicyRequest {}
export interface GetRegistryPolicyCommandOutput extends GetRegistryPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the permissions policy for a registry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetRegistryPolicyCommand extends $Command<
  GetRegistryPolicyCommandInput,
  GetRegistryPolicyCommandOutput,
  ECRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRegistryPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetRegistryPolicyCommandInput, GetRegistryPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "GetRegistryPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRegistryPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRegistryPolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRegistryPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRegistryPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRegistryPolicyCommandOutput> {
    return deserializeAws_json1_1GetRegistryPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
