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

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { FailoverDBClusterMessage, FailoverDBClusterResult } from "../models/models_0";
import {
  deserializeAws_queryFailoverDBClusterCommand,
  serializeAws_queryFailoverDBClusterCommand,
} from "../protocols/Aws_query";

export interface FailoverDBClusterCommandInput extends FailoverDBClusterMessage {}
export interface FailoverDBClusterCommandOutput extends FailoverDBClusterResult, __MetadataBearer {}

/**
 * <p>Forces a failover for a cluster.</p>
 *         <p>A failover for a cluster promotes one of the Amazon DocumentDB replicas (read-only instances) in the cluster to be the primary instance (the cluster writer).</p>
 *         <p>If the primary instance fails, Amazon DocumentDB automatically fails over to an Amazon DocumentDB replica, if one exists. You can force a failover when you want to simulate a failure of a primary instance for testing.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, FailoverDBClusterCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, FailoverDBClusterCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const command = new FailoverDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link FailoverDBClusterCommandInput} for command's `input` shape.
 * @see {@link FailoverDBClusterCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class FailoverDBClusterCommand extends $Command<
  FailoverDBClusterCommandInput,
  FailoverDBClusterCommandOutput,
  DocDBClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: FailoverDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DocDBClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<FailoverDBClusterCommandInput, FailoverDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DocDBClient";
    const commandName = "FailoverDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: FailoverDBClusterMessage.filterSensitiveLog,
      outputFilterSensitiveLog: FailoverDBClusterResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: FailoverDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryFailoverDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<FailoverDBClusterCommandOutput> {
    return deserializeAws_queryFailoverDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
