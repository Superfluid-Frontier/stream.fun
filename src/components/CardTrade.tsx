import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { OrderTypeEnum } from "@/lib/enums";
import { cn } from "@/lib/utils";

export function CardTrade() {
  const [option, setOption] = React.useState(OrderTypeEnum.BUY);
  const [coin, _setCoin] = React.useState("SOL");
  const handleOption = (type: OrderTypeEnum) => {
    setOption(type);
  };

  const optionsValue = [1, 5, 10];

  return (
    <Card>
      <CardContent className="p-5">
        <div className="flex flex-col space-y-2">
          <div className="flex flex-row space-x-2 w-full">
            <Button
              onClick={() => handleOption(OrderTypeEnum.BUY)}
              className={cn(
                "w-full hover:bg-green-500",
                option === OrderTypeEnum.BUY && "bg-green-500  text-white"
              )}
            >
              Buy
            </Button>
            <Button
              onClick={() => handleOption(OrderTypeEnum.SELL)}
              className={cn(
                "w-full hover:bg-red-500",
                option === OrderTypeEnum.SELL && "bg-red-500 text-white"
              )}
            >
              Sell
            </Button>
          </div>

          <Input name="value" placeholder="0.0" type="number" />
          <div className="flex flex-row space-x-2">
            {optionsValue.map((item, index) => (
              <div
                key={index}
                className="px-2 !py-1 bg-gray-400 text-white rounded-md text-xs hover:bg-gray-500 cursor-pointer"
              >
                {item} {coin}
              </div>
            ))}
          </div>
          <Button className="bg-green-500 text-white w-full">
            Place trade
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
