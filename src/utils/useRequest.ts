import { ref } from "vue";
function useRequest<T = any, U = any>(
  requestHandler: (...rest: any[]) => Promise<T>,
  config?: {
    transform: (data: T) => U;
  }
) {
  const result = ref<T>();
  const loading = ref(true);
  const error = ref(false);
  requestHandler()
    .then((res) => {
      if (config?.transform) {
        //   result.value = config.transform(res);
      } else {
        result.value = res;
      }
    })
    .catch((err) => (error.value = err))
    .finally(() => {
      loading.value = false;
    });
  return [result, loading, error];
}
export default useRequest;
//类似于useRequest函数 借助于若干个组合式API封装好一个指定的逻辑 (自定义hook)
//一定要以use开头 (vueuse)
