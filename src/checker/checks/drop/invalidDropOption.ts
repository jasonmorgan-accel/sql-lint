/**
 * This error is triggered when a DROP statement
 * has an invalid option following the 'DROP'.
 *
 * It would trigger for this:
 *   DROP RUBBISH thing;
 * It wouldn't trigger for this:
 *   DROP TABLE test;
 */

import { IChecker } from "../../interface";
import { Drop } from "../../../barrel/statements";
import { InvalidOption } from "../generic/invalidOption";

class InvalidDropOption extends InvalidOption implements IChecker {
  public checker = new Drop();
}

export { InvalidDropOption };
