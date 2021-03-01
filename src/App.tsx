import { defineComponent } from 'vue';
import {RouterLink, RouterView} from 'vue-router';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <>
        <div id="nav">
          hello vue tsx
          <RouterLink to="/">Home</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
        </div>
        <RouterView/>
      </>
    );
  }
});
