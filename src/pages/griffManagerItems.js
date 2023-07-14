import React, {useRef, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './menuManagerDesign.css';
import axios from "axios";
import {restaurantMenu} from "../menuDatabase";
import Button from 'react-bootstrap/Button';
export function GriffMondayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.griff.monday);

    function HandleSaveClick() {
        let data = {
            "restaurant":"griff",
            "MON": editorRef.current.getContent()
        };

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://engine.ehesparaszt.com/api/update',
            headers: { 
                'Content-Type': 'text/plain'
            },
            data : data
        };

        axios.request(config)
.then((response) => {
    console.log(JSON.stringify(response.data));
})
.catch((error) => {
    console.log(error);
});
        document.location.reload();

    }
    return (
        <div  className="menuEditor">
            <Editor
                apiKey='aefkq0v47bsiuidoe6pq2s1tfdjmw61r8055dxffya11vcf4'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={menu}
                init={{
                height: 500,
                    menubar: 'file',
                    plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            />

            <Button variant="outline-primary" onClick={HandleSaveClick}>Mentés / Uložiť</Button>

        </div>
        );
}

export function GriffTuesdayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.griff.tuesday);


    function HandleSaveClick() {
        let data = {
            "restaurant":"griff",
            "TUES": editorRef.current.getContent()
        };

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://engine.ehesparaszt.com/api/update',
            headers: { 
                'Content-Type': 'text/plain'
            },
            data : data
        };

        axios.request(config)
.then((response) => {
    console.log(JSON.stringify(response.data));
})
.catch((error) => {
    console.log(error);
});
        document.location.reload();

    }
    return (
        <div  className="menuEditor">
            <Editor
                apiKey='aefkq0v47bsiuidoe6pq2s1tfdjmw61r8055dxffya11vcf4'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={menu}
                init={{
                height: 500,
                    menubar: 'file',
                    plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            />

            <Button variant="outline-primary" onClick={HandleSaveClick}>Mentés / Uložiť</Button>
        </div>
        );
}

export function GriffWednesdayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.griff.wednesday);


    function HandleSaveClick() {
        let data = {
            "restaurant":"griff",
            "WED": editorRef.current.getContent()
        };                

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://engine.ehesparaszt.com/api/update',
            headers: { 
                'Content-Type': 'text/plain'
            },
            data : data
        };

        axios.request(config)
.then((response) => {
    console.log(JSON.stringify(response.data));
})
.catch((error) => {
    console.log(error);
});
        document.location.reload();

    }
    return (
        <div  className="menuEditor">
            <Editor
                apiKey='aefkq0v47bsiuidoe6pq2s1tfdjmw61r8055dxffya11vcf4'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={menu}
                init={{
                height: 500,
                    menubar: 'file',
                    plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            />

            <Button variant="outline-primary" onClick={HandleSaveClick}>Mentés / Uložiť</Button>
        </div>
        );
}

export function GriffThursdayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.griff.thursday);


    function HandleSaveClick() {
        let data = {
            "restaurant":"griff",
            "THURS": editorRef.current.getContent()
        };
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://engine.ehesparaszt.com/api/update',
            headers: { 
                'Content-Type': 'text/plain'
            },
            data : data
        };

        axios.request(config)
.then((response) => {
    console.log(JSON.stringify(response.data));
})
.catch((error) => {
    console.log(error);
});
        document.location.reload();

    }
    return (
        <div  className="menuEditor">
            <Editor
                apiKey='aefkq0v47bsiuidoe6pq2s1tfdjmw61r8055dxffya11vcf4'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={menu}
                init={{
                height: 500,
                    menubar: 'file',
                    plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            />

            <Button variant="outline-primary" onClick={HandleSaveClick}>Mentés / Uložiť</Button>
        </div>
        );
}

export function GriffFridayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.griff.friday);


    function HandleSaveClick() {
        let data = {
            "restaurant":"griff",
            "FRI": editorRef.current.getContent()
        };
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://engine.ehesparaszt.com/api/update',
            headers: { 
                'Content-Type': 'text/plain'
            },
            data : data
        };

        axios.request(config)
.then((response) => {
    console.log(JSON.stringify(response.data));
})
.catch((error) => {
    console.log(error);
});
        document.location.reload();

    }
    return (
        <div  className="menuEditor">
            <Editor
                apiKey='aefkq0v47bsiuidoe6pq2s1tfdjmw61r8055dxffya11vcf4'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={menu}
                init={{
                height: 500,
                    menubar: 'file',
                    plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            />

            <Button variant="outline-primary" onClick={HandleSaveClick}>Mentés / Uložiť</Button>
        </div>
        );
}



export function GriffWeeklyMenuEditor() {
    const editorRef = useRef(null);
    const [weeklyMenu, setWeeklyMenu] = useState(restaurantMenu.griff.monday + restaurantMenu.griff.tuesday + restaurantMenu.griff.wednesday + restaurantMenu.griff.thursday + restaurantMenu.griff.friday)
    console.log(weeklyMenu);

    return (
        <div  className="menuEditor">
            <Editor
                apiKey='aefkq0v47bsiuidoe6pq2s1tfdjmw61r8055dxffya11vcf4'
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue={weeklyMenu}
                init={{
                height: 500,
                    menubar: 'file',
                    plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',

                }}
            />
        </div>
        )
}

