import React from "react";
import { Card } from "antd";

export default function Admin() {
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card title="Card title" bordered={false} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </div>
  );
}
