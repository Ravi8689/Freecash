import Image from "next/image";
import { SiBitcoinsv } from "react-icons/si";

export default function LastTransactionItem({ item }) {
  const timestamp = new Date(item.created_at);
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth() + 1; // Months are zero-based, so add 1
  const day = timestamp.getDate();
  const created_at=`${year}-${month}-${day}`
  return (

    <div className="product_main_group1_sub2_item py-1 px-2 gap-2 flex justify-between item-center gap-1 bg-anovanavbar flex justify-center items-center rounded">
      <div className="product_main_group1_sub2_image">
        <SiBitcoinsv className={`w-6 h-6 text-${item.color}-500`} />
        {/* <Image width={50} height={50} src={item.image} alt="product image" style={{minWidth:'45px'}}/> */}
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
