"use client";

import EditorJS from "@editorjs/editorjs";
import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import "@/styles/editor.css";

export function Editor() {
    const ref = React.useRef<EditorJS>();

    const [isMounted, setIsMounted] = React.useState<boolean>(false);

    const initializeEditor = React.useCallback(async () => {
        const EditorJS = (await import("@editorjs/editorjs")).default;
        // @ts-ignore
        const Header = (await import("@editorjs/header")).default;
        // @ts-ignore
        const Embed = (await import("@editorjs/embed")).default;
        // @ts-ignore
        const Table = (await import("@editorjs/table")).default;
        // @ts-ignore
        const List = (await import("@editorjs/list")).default;
        // @ts-ignore
        const Code = (await import("@editorjs/code")).default;
        // @ts-ignore
        const LinkTool = (await import("@editorjs/link")).default;
        // @ts-ignore
        const InlineCode = (await import("@editorjs/inline-code")).default;

        // const body = postPatchSchema.parse(post)

        if (!ref.current) {
            const editor = new EditorJS({
                holder: "editor",
                onReady() {
                    ref.current = editor;
                },
                placeholder: "Type here to write your post...",
                inlineToolbar: true,
                // data: body.content,
                tools: {
                    header: Header,
                    linkTool: LinkTool,
                    list: List,
                    code: Code,
                    inlineCode: InlineCode,
                    table: Table,
                    embed: Embed,
                },
            });
        }
    }, []);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMounted(true);
        }
    }, []);

    React.useEffect(() => {
        if (isMounted) {
            initializeEditor();

            return () => {
                ref.current?.destroy();
                ref.current = undefined;
            };
        }
    }, [isMounted, initializeEditor]);

    if (!isMounted) {
        return null;
    }

    return (
        <form action="">
            <div className="grid w-full gap-10">
                <div className="flex w-full items-center justify-between"></div>
                <div className="grid w-full pb-30vh transition-transform duration-270 ease">
                    <TextareaAutosize
                        autoFocus
                        id="title"
                        // defaultValue={post.title}
                        placeholder="Post title"
                        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
                        // {...register("title")}
                    />
                    <div id="editor" />
                    {/* <p className="text-sm text-gray-500">
                        Use{" "}
                        <kbd className="rounded-md border bg-muted px-1 text-xs uppercase">Tab</kbd>{" "}
                        to open the command menu.
                    </p> */}
                </div>
            </div>
        </form>
    );
}

/*
[full-start] var(--margin-left-width,var(--margin-width)) [content-start] var(--content-width) [content-end] var(--margin-right-width,var(--margin-width)) [full-end]
*/
