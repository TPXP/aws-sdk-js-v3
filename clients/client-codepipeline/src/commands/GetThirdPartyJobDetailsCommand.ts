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

import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { GetThirdPartyJobDetailsInput, GetThirdPartyJobDetailsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetThirdPartyJobDetailsCommand,
  serializeAws_json1_1GetThirdPartyJobDetailsCommand,
} from "../protocols/Aws_json1_1";

export interface GetThirdPartyJobDetailsCommandInput extends GetThirdPartyJobDetailsInput {}
export interface GetThirdPartyJobDetailsCommandOutput extends GetThirdPartyJobDetailsOutput, __MetadataBearer {}

/**
 * <p>Requests the details of a job for a third party action. Used for partner actions
 *             only.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts. This API also returns any secret
 *                 values defined for the action.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetThirdPartyJobDetailsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetThirdPartyJobDetailsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetThirdPartyJobDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThirdPartyJobDetailsCommandInput} for command's `input` shape.
 * @see {@link GetThirdPartyJobDetailsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class GetThirdPartyJobDetailsCommand extends $Command<
  GetThirdPartyJobDetailsCommandInput,
  GetThirdPartyJobDetailsCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetThirdPartyJobDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetThirdPartyJobDetailsCommandInput, GetThirdPartyJobDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "GetThirdPartyJobDetailsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetThirdPartyJobDetailsInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetThirdPartyJobDetailsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetThirdPartyJobDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetThirdPartyJobDetailsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetThirdPartyJobDetailsCommandOutput> {
    return deserializeAws_json1_1GetThirdPartyJobDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
