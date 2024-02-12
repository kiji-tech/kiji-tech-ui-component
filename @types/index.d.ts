import React from "react";
import { AvatarProps } from "../src/components/forms/avatar/avatar";
import { BadgeProps } from "../src/components/badge/badge";
import { ButtonProps } from "../src/components/button/button";
import { CheckboxProps } from "../src/components/checkbox/checkbox";
import { InputProps } from "../src/components/forms/input/input";
import { ModalProps } from "../src/components/modal/modal";
import { PagerProps } from "../src/components/pager/pager";
import { TextProps } from "../src/components/text/text";
import { IconButtonProps } from "../src/components/forms/icon.button/icon.button";
import { SelectorProps } from "../src/components/forms/selector/selector";
import { TextareaProps } from "../src/components/forms/textarea/textarea";
import {
  SkeltonCard,
  SkeltonList,
  SkeltonGame,
  SkeltonRoom,
  ThemeProps,
} from "../src/index";

// === Common ===
export declare const Badge: React.FC<BadgeProps>;
export declare const BadgeProps: BadgeProps;
export declare const Modal: React.FC<ModalProps>;
export declare const ModalProps: ModalProps;
export declare const Pager: React.FC<PagerProps>;
export declare const PagerProps: PagerProps;
export declare const List: React.FC;
export declare const ListRow: React.FC;
export declare const ListColumn: React.FC;
export declare const Text: React.FC<TextProps>;
export declare const ThemeProvider: React.Provider<ThemeProps>;

// === Form ===
export declare const Avatar: React.FC<AvatarProps>;
export declare const AvatarProps: AvatarProps;
export declare const Button: React.FC<ButtonProps>;
export declare const ButtonProps: ButtonProps;
export declare const Checkbox: React.FC<CheckboxProps>;
export declare const CheckboxProps: CheckboxProps;
export declare const IconButton: React.FC<IconButtonProps>;
export declare const IconButtonProps: IconButtonProps;
export declare const Input: React.FC<InputProps>;
export declare const InputProps: InputProps;
export declare const Selector: React.FC<SelectorProps>;
export declare const SelectorProps: SelectorProps;
export declare const Textarea: React.FC<TextareaProps>;
export declare const TextareaProps: TextareaProps;

export declare const SkeltonCard: SkeltonCard;
export declare const SkeltonList: SkeltonList;
export declare const SkeltonGame: SkeltonGame;
export declare const SkeltonRoom: SkeltonRoom;
