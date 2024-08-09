// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file dwango/nicolive/chat/data/Statistics.proto (package dwango.nicolive.chat.data, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file dwango/nicolive/chat/data/Statistics.proto.
 */
export const file_dwango_nicolive_chat_data_Statistics: GenFile = /*@__PURE__*/
  fileDesc("Cipkd2FuZ28vbmljb2xpdmUvY2hhdC9kYXRhL1N0YXRpc3RpY3MucHJvdG8SGWR3YW5nby5uaWNvbGl2ZS5jaGF0LmRhdGEiogEKClN0YXRpc3RpY3MSFAoHdmlld2VycxgBIAEoA0gAiAEBEhUKCGNvbW1lbnRzGAIgASgDSAGIAQESFgoJYWRfcG9pbnRzGAMgASgDSAKIAQESGAoLZ2lmdF9wb2ludHMYBCABKANIA4gBAUIKCghfdmlld2Vyc0ILCglfY29tbWVudHNCDAoKX2FkX3BvaW50c0IOCgxfZ2lmdF9wb2ludHNCuAEKHWNvbS5kd2FuZ28ubmljb2xpdmUuY2hhdC5kYXRhQg9TdGF0aXN0aWNzUHJvdG9QAaICBEROQ0SqAhlEd2FuZ28uTmljb2xpdmUuQ2hhdC5EYXRhygIZRHdhbmdvXE5pY29saXZlXENoYXRcRGF0YeICJUR3YW5nb1xOaWNvbGl2ZVxDaGF0XERhdGFcR1BCTWV0YWRhdGHqAhxEd2FuZ286Ok5pY29saXZlOjpDaGF0OjpEYXRhYgZwcm90bzM");

/**
 * @generated from message dwango.nicolive.chat.data.Statistics
 */
export type Statistics = Message<"dwango.nicolive.chat.data.Statistics"> & {
  /**
   * @generated from field: optional int64 viewers = 1;
   */
  viewers?: bigint;

  /**
   * @generated from field: optional int64 comments = 2;
   */
  comments?: bigint;

  /**
   * @generated from field: optional int64 ad_points = 3;
   */
  adPoints?: bigint;

  /**
   * @generated from field: optional int64 gift_points = 4;
   */
  giftPoints?: bigint;
};

/**
 * Describes the message dwango.nicolive.chat.data.Statistics.
 * Use `create(StatisticsSchema)` to create a new message.
 */
export const StatisticsSchema: GenMessage<Statistics> = /*@__PURE__*/
  messageDesc(file_dwango_nicolive_chat_data_Statistics, 0);

