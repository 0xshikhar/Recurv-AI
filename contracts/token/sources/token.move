
module token::token {
    use iota::coin;

    /// One-Time-Witness of kind: `Coin<package_object::token::TOKEN>`
    public struct TOKEN has drop {}

    fun init(witness: TOKEN, ctx: &mut TxContext) {
        let (treasurycap, metadata) = coin::create_currency(
            witness,
            6,                  // decimals
            b"EXAMPLE",         // symbol
            b"Example Coin",     // name
            b"Just an example",  // description
            option::none(),     // icon URL
            ctx
        );

        // transfer the `TreasuryCap` to the sender, admin capabilities
        transfer::public_transfer(treasurycap, tx_context::sender(ctx));

        // metadata is typically frozen after creation
        transfer::public_freeze_object(metadata);
    }
}