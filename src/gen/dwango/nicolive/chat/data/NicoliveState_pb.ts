// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file dwango/nicolive/chat/data/NicoliveState.proto (package dwango.nicolive.chat.data, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Statistics } from "./Statistics_pb";
import { file_dwango_nicolive_chat_data_Statistics } from "./Statistics_pb";
import type { Enquete } from "./Enquete_pb";
import { file_dwango_nicolive_chat_data_Enquete } from "./Enquete_pb";
import type { MoveOrder } from "./MoveOrder_pb";
import { file_dwango_nicolive_chat_data_MoveOrder } from "./MoveOrder_pb";
import type { Marque } from "./Marque_pb";
import { file_dwango_nicolive_chat_data_Marque } from "./Marque_pb";
import type { CommentLock } from "./CommentLock_pb";
import { file_dwango_nicolive_chat_data_CommentLock } from "./CommentLock_pb";
import type { CommentMode } from "./CommentMode_pb";
import { file_dwango_nicolive_chat_data_CommentMode } from "./CommentMode_pb";
import type { TrialPanel } from "./TrialPanel_pb";
import { file_dwango_nicolive_chat_data_TrialPanel } from "./TrialPanel_pb";
import type { FingerPrint } from "./FingerPrint_pb";
import { file_dwango_nicolive_chat_data_FingerPrint } from "./FingerPrint_pb";
import type { ProgramStatus } from "./ProgramStatus_pb";
import { file_dwango_nicolive_chat_data_ProgramStatus } from "./ProgramStatus_pb";
import type { ModerationAnnouncement } from "./atoms/ModerationAnnouncement_pb";
import { file_dwango_nicolive_chat_data_atoms_ModerationAnnouncement } from "./atoms/ModerationAnnouncement_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file dwango/nicolive/chat/data/NicoliveState.proto.
 */
export const file_dwango_nicolive_chat_data_NicoliveState: GenFile = /*@__PURE__*/
  fileDesc("Ci1kd2FuZ28vbmljb2xpdmUvY2hhdC9kYXRhL05pY29saXZlU3RhdGUucHJvdG8SGWR3YW5nby5uaWNvbGl2ZS5jaGF0LmRhdGEi1wYKDU5pY29saXZlU3RhdGUSPgoKc3RhdGlzdGljcxgBIAEoCzIlLmR3YW5nby5uaWNvbGl2ZS5jaGF0LmRhdGEuU3RhdGlzdGljc0gAiAEBEjgKB2VucXVldGUYAiABKAsyIi5kd2FuZ28ubmljb2xpdmUuY2hhdC5kYXRhLkVucXVldGVIAYgBARI9Cgptb3ZlX29yZGVyGAMgASgLMiQuZHdhbmdvLm5pY29saXZlLmNoYXQuZGF0YS5Nb3ZlT3JkZXJIAogBARI2CgZtYXJxdWUYBCABKAsyIS5kd2FuZ28ubmljb2xpdmUuY2hhdC5kYXRhLk1hcnF1ZUgDiAEBEkEKDGNvbW1lbnRfbG9jaxgFIAEoCzImLmR3YW5nby5uaWNvbGl2ZS5jaGF0LmRhdGEuQ29tbWVudExvY2tIBIgBARJBCgxjb21tZW50X21vZGUYBiABKAsyJi5kd2FuZ28ubmljb2xpdmUuY2hhdC5kYXRhLkNvbW1lbnRNb2RlSAWIAQESPwoLdHJpYWxfcGFuZWwYByABKAsyJS5kd2FuZ28ubmljb2xpdmUuY2hhdC5kYXRhLlRyaWFsUGFuZWxIBogBARJBCgxmaW5nZXJfcHJpbnQYCCABKAsyJi5kd2FuZ28ubmljb2xpdmUuY2hhdC5kYXRhLkZpbmdlclByaW50SAeIAQESRQoOcHJvZ3JhbV9zdGF0dXMYCSABKAsyKC5kd2FuZ28ubmljb2xpdmUuY2hhdC5kYXRhLlByb2dyYW1TdGF0dXNICIgBARJdChdtb2RlcmF0aW9uX2Fubm91bmNlbWVudBgKIAEoCzI3LmR3YW5nby5uaWNvbGl2ZS5jaGF0LmRhdGEuYXRvbXMuTW9kZXJhdGlvbkFubm91bmNlbWVudEgJiAEBQg0KC19zdGF0aXN0aWNzQgoKCF9lbnF1ZXRlQg0KC19tb3ZlX29yZGVyQgkKB19tYXJxdWVCDwoNX2NvbW1lbnRfbG9ja0IPCg1fY29tbWVudF9tb2RlQg4KDF90cmlhbF9wYW5lbEIPCg1fZmluZ2VyX3ByaW50QhEKD19wcm9ncmFtX3N0YXR1c0IaChhfbW9kZXJhdGlvbl9hbm5vdW5jZW1lbnRCuwEKHWNvbS5kd2FuZ28ubmljb2xpdmUuY2hhdC5kYXRhQhJOaWNvbGl2ZVN0YXRlUHJvdG9QAaICBEROQ0SqAhlEd2FuZ28uTmljb2xpdmUuQ2hhdC5EYXRhygIZRHdhbmdvXE5pY29saXZlXENoYXRcRGF0YeICJUR3YW5nb1xOaWNvbGl2ZVxDaGF0XERhdGFcR1BCTWV0YWRhdGHqAhxEd2FuZ286Ok5pY29saXZlOjpDaGF0OjpEYXRhYgZwcm90bzM", [file_dwango_nicolive_chat_data_Statistics, file_dwango_nicolive_chat_data_Enquete, file_dwango_nicolive_chat_data_MoveOrder, file_dwango_nicolive_chat_data_Marque, file_dwango_nicolive_chat_data_CommentLock, file_dwango_nicolive_chat_data_CommentMode, file_dwango_nicolive_chat_data_TrialPanel, file_dwango_nicolive_chat_data_FingerPrint, file_dwango_nicolive_chat_data_ProgramStatus, file_dwango_nicolive_chat_data_atoms_ModerationAnnouncement]);

/**
 * @generated from message dwango.nicolive.chat.data.NicoliveState
 */
export type NicoliveState = Message<"dwango.nicolive.chat.data.NicoliveState"> & {
  /**
   * @generated from field: optional dwango.nicolive.chat.data.Statistics statistics = 1;
   */
  statistics?: Statistics;

  /**
   * @generated from field: optional dwango.nicolive.chat.data.Enquete enquete = 2;
   */
  enquete?: Enquete;

  /**
   * @generated from field: optional dwango.nicolive.chat.data.MoveOrder move_order = 3;
   */
  moveOrder?: MoveOrder;

  /**
   * @generated from field: optional dwango.nicolive.chat.data.Marque marque = 4;
   */
  marque?: Marque;

  /**
   * @generated from field: optional dwango.nicolive.chat.data.CommentLock comment_lock = 5;
   */
  commentLock?: CommentLock;

  /**
   * @generated from field: optional dwango.nicolive.chat.data.CommentMode comment_mode = 6;
   */
  commentMode?: CommentMode;

  /**
   * @generated from field: optional dwango.nicolive.chat.data.TrialPanel trial_panel = 7;
   */
  trialPanel?: TrialPanel;

  /**
   * @generated from field: optional dwango.nicolive.chat.data.FingerPrint finger_print = 8;
   */
  fingerPrint?: FingerPrint;

  /**
   * @generated from field: optional dwango.nicolive.chat.data.ProgramStatus program_status = 9;
   */
  programStatus?: ProgramStatus;

  /**
   * @generated from field: optional dwango.nicolive.chat.data.atoms.ModerationAnnouncement moderation_announcement = 10;
   */
  moderationAnnouncement?: ModerationAnnouncement;
};

/**
 * Describes the message dwango.nicolive.chat.data.NicoliveState.
 * Use `create(NicoliveStateSchema)` to create a new message.
 */
export const NicoliveStateSchema: GenMessage<NicoliveState> = /*@__PURE__*/
  messageDesc(file_dwango_nicolive_chat_data_NicoliveState, 0);

