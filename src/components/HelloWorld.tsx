import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(prop) {
    const count = ref(0);
    const editClickCount = ref(0)
    const onEditClick = () => {
      console.log('edit click')
      editClickCount.value++;
    }
    return () => (
      <>
        <h1>{prop.msg}</h1>
        <el-button onClick={() => {count.value ++}}>count is: { count.value }</el-button>
        <p onClick={onEditClick}>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
        <div >
          edit click count: {editClickCount.value}
        </div>
      </>
    );
  },
});
