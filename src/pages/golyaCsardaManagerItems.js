import React, {useRef, useState} from 'react';
import { Editor } from '@tinymce/tinymce-react';
import './menuManagerDesign.css';
import axios from "axios";
import {restaurantMenu} from "../menuDatabase";
import Button from 'react-bootstrap/Button';
export function GolyaCsardaMondayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.golya_csarda.monday);

    function HandleSaveClick() {
        let data = {
            "restaurant":"golya_csarda",
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

export function GolyaCsardaTuesdayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.golya_csarda.tuesday);


    function HandleSaveClick() {
        let data = {
            "restaurant":"golya_csarda",
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

export function GolyaCsardaWednesdayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.golya_csarda.wednesday);


    function HandleSaveClick() {
        let data = {
            "restaurant":"golya_csarda",
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

export function GolyaCsardaThursdayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.golya_csarda.thursday);


    function HandleSaveClick() {
        let data = {
            "restaurant":"golya_csarda",
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

export function GolyaCsardaFridayMenuEditor() {
    const editorRef = useRef(null);
    const [menu, setMenu] = useState(restaurantMenu.golya_csarda.friday);


    function HandleSaveClick() {
        let data = {
            "restaurant":"golya_csarda",
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



export function GolyaCsardaWeeklyMenuEditor() {
    const editorRef = useRef(null);
    const [weeklyMenu, setWeeklyMenu] = useState(restaurantMenu.golya_csarda.monday + restaurantMenu.golya_csarda.tuesday + restaurantMenu.golya_csarda.wednesday + restaurantMenu.golya_csarda.thursday + restaurantMenu.golya_csarda.friday)
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

