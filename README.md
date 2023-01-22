# be-ideating

```html
<be-hive>
    <template id=menu-option>
        <a target="_blank">
            <i></i>
            <h3></h3>
        </a>
        <script transform='{
            "a": {
                "href": "url",
                "className": "hyperlinkCss",
                ".style.transitionDelay": "transitionDelay"
            },
            "i":{
                "className": "icon"
            },
            "h3": {
                "textContent": "label",
                "className": "labelCss"
            }
        }'>
            export const islet = ({type, open, index}) => ({
                hyperlinkCss: `menu-${type}-option`,
                transitionDelay: `${(open ? 200 : 0) + 50*index}ms`,
                closed: !open,
                labelCss: type === 'quick' ? 'tooltip' : 'label'
            });
        </script>
    </template>
</be-hive>
...

<menu-option be-ideating></menu-option>
```