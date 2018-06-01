import MediaQuery from 'react-responsive';

const Example = () => (

    <div>
        <MediaQuery query="(min-device-width: 1224px)">
            {console.log('a')}
            <MediaQuery query="(min-device-width: 1824px)">
                {console.log('b')}
            </MediaQuery>
            <MediaQuery query="(max-width: 1224px)">
                {console.log('c')}
            </MediaQuery>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1224px)">
            {console.log('d')}
        </MediaQuery>
        <MediaQuery query="(orientation: portrait)">
            {console.log('e')}
        </MediaQuery>
        <MediaQuery query="(orientation: landscape)">
            {console.log('f')}
        </MediaQuery>
        <MediaQuery query="(min-resolution: 2dppx)">
            {console.log('g')}
        </MediaQuery>
    </div>
);