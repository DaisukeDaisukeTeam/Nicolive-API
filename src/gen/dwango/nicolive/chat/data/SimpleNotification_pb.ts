// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file dwango/nicolive/chat/data/SimpleNotification.proto (package dwango.nicolive.chat.data, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file dwango/nicolive/chat/data/SimpleNotification.proto.
 */
export const file_dwango_nicolive_chat_data_SimpleNotification: GenFile = /*@__PURE__*/
  fileDesc("CjJkd2FuZ28vbmljb2xpdmUvY2hhdC9kYXRhL1NpbXBsZU5vdGlmaWNhdGlvbi5wcm90bxIZZHdhbmdvLm5pY29saXZlLmNoYXQuZGF0YSLHAQoSU2ltcGxlTm90aWZpY2F0aW9uEhAKBmljaGliYRgBIAEoCUgAEg8KBXF1b3RlGAIgASgJSAASEQoHZW1vdGlvbhgDIAEoCUgAEhAKBmNydWlzZRgEIAEoCUgAEhoKEHByb2dyYW1fZXh0ZW5kZWQYBSABKAlIABIUCgpyYW5raW5nX2luGAYgASgJSAASGQoPcmFua2luZ191cGRhdGVkGAggASgJSAASEQoHdmlzaXRlZBgHIAEoCUgAQgkKB21lc3NhZ2VCwAEKHWNvbS5kd2FuZ28ubmljb2xpdmUuY2hhdC5kYXRhQhdTaW1wbGVOb3RpZmljYXRpb25Qcm90b1ABogIERE5DRKoCGUR3YW5nby5OaWNvbGl2ZS5DaGF0LkRhdGHKAhlEd2FuZ29cTmljb2xpdmVcQ2hhdFxEYXRh4gIlRHdhbmdvXE5pY29saXZlXENoYXRcRGF0YVxHUEJNZXRhZGF0YeoCHER3YW5nbzo6Tmljb2xpdmU6OkNoYXQ6OkRhdGFiBnByb3RvMw", [file_google_protobuf_duration]);

/**
 * @generated from message dwango.nicolive.chat.data.SimpleNotification
 */
export type SimpleNotification = Message<"dwango.nicolive.chat.data.SimpleNotification"> & {
  /**
   * @generated from oneof dwango.nicolive.chat.data.SimpleNotification.message
   */
  message: {
    /**
     * @generated from field: string ichiba = 1;
     */
    value: string;
    case: "ichiba";
  } | {
    /**
     * @generated from field: string quote = 2;
     */
    value: string;
    case: "quote";
  } | {
    /**
     * @generated from field: string emotion = 3;
     */
    value: string;
    case: "emotion";
  } | {
    /**
     * @generated from field: string cruise = 4;
     */
    value: string;
    case: "cruise";
  } | {
    /**
     * @generated from field: string program_extended = 5;
     */
    value: string;
    case: "programExtended";
  } | {
    /**
     * @generated from field: string ranking_in = 6;
     */
    value: string;
    case: "rankingIn";
  } | {
    /**
     * @generated from field: string ranking_updated = 8;
     */
    value: string;
    case: "rankingUpdated";
  } | {
    /**
     * @generated from field: string visited = 7;
     */
    value: string;
    case: "visited";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message dwango.nicolive.chat.data.SimpleNotification.
 * Use `create(SimpleNotificationSchema)` to create a new message.
 */
export const SimpleNotificationSchema: GenMessage<SimpleNotification> = /*@__PURE__*/
  messageDesc(file_dwango_nicolive_chat_data_SimpleNotification, 0);

