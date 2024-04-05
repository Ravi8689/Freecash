import { SiBitcoinsv } from "react-icons/si";
export default function LastTransactionItem({item}) {
  return (
    <div
    className="product_main_group1_sub2_item py-2 px-3 gap-2 flex justify-between item-center gap-1 bg-anovanavbar flex justify-center items-center rounded"
  >
    <div className="product_main_group1_sub2_image">
 
      <SiBitcoinsv className={`w-6 h-6 text-${item.color}-500`} />
    </div>
    <div className="product_main_group1_sub2_content text-xs">
      <div className="product_main_group1_sub2_content_title font-medium">
        <p>{item.title}</p>
      </div>
      <div className="product_main_group1_sub2_content_time text-anovatext1 text-nowrap hidden md:block">
        <p>{item.time}</p>
      </div>
    </div>
    <div className="product_main_group1_sub2_number px-2 py-1 font-medium rounded bg-anova6 text-xs ml-3">
      <span>${item.price}</span>
    </div>
  </div>
  );
}
