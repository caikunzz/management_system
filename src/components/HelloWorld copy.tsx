import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const [v1, fn] = (() => {
      const v1 = ref(1);
      function fn() {
        console.log(v1.value++);
      }
      return [v1, fn] as const;
    })();
    // 收集用户名和手机号的逻辑
    const v2 = ref({
      username: "",
      phonenumber: "",
    });
    function echoUserInfo() {
      console.log(v2.value);
    }
    return () => (
      <div>
        <h1 onClick={fn}>{v1}</h1>
        <div>
          <label for="username">姓名</label>
          <input
            id="username"
            type="text"
            placeholder="姓名"
            v-model="v2.username"
          />
        </div>
        <div>
          <label for="phonenumber">手机号</label>
          <input
            id="phonenumber"
            type="tel"
            placeholder="手机号"
            v-model="v2.phonenumber"
          />
        </div>
        <button onClick={echoUserInfo}>echo user info</button>
      </div>
    );
  },
});
