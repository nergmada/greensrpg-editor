<script>
    import load from 'lib/loader';
    import Gutter from 'components/Frames/Gutter';
    import View from 'components/Frames/View';
    import VerticalCenter from 'components/Frames/VerticalCenter';
    import {editableCampaign} from 'lib/store';

    const handler = () => {
        const uploader = document.createElement('input');
        uploader.type = "file";
        uploader.accept = ".grpg";
        uploader.addEventListener('change', (e) => {
            if (e.path.length > 0) load(e.path[0].files).then(c => {
                $editableCampaign = c;
            });
        });
        uploader.click();
    }
</script>

<View>
    <Gutter>
        <VerticalCenter>
            <div class="center">
                <h1>Green's RPG Development Tool</h1>
                <button on:click={handler}>Load</button>
            </div>
        </VerticalCenter>
    </Gutter>
</View>

<style>
    .center {
        text-align: center;
    }
</style>